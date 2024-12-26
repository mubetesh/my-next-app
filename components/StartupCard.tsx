import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const StartupCard = ({ card }: { card: StartupCardType } ) => {
  const {
    _id,
    createdAt,
    title,
    description,
    author: { _id: authorId, name },
    views,
    image,
    category,
  } = card;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="size-6 text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex justify-between gap-2 my-5">
        <div>
          <Link href={`/user/${authorId}`}>
            <p className="text-16-semibold line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="text-26-semibold line-clamp-1">{title}</p>
          </Link>
        </div>
        <div>
          <Link href={`/user/${authorId}`}>
            <Image
              src={image}
              alt="Avatar"
              width={64}
              height={64}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="picture" className="startup-card_img"/>
      </Link>
      <div className="flex justify-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
        <p>{category}</p></Link>
        <Button className="startup-card_btn" asChild>
        <Link href={`/startup/${_id}`}>Details</Link></Button>
      </div>
      
    </li>
  );
};

export default StartupCard;
