
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  imageUrl?: string
  linkUrl?: string
}

export function ServiceCard({ title, description, imageUrl, linkUrl }: ServiceCardProps) {
  const cardContent = (
    <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        {linkUrl && (
          <span className="inline-flex items-center text-primary hover:underline">
            Learn more
          </span>
        )}
      </CardContent>
    </Card>
  );

  if (linkUrl) {
    return (
      <Link href={linkUrl} className="group block h-full">
        {cardContent}
      </Link>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}
