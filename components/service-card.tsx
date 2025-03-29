
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  link?: string;
  icon?: React.ReactNode;
}

export function ServiceCard({ title, description, link, icon }: ServiceCardProps) {
  const content = (
    <Card className="h-full">
      <CardContent className="flex flex-col items-center justify-center h-full p-6">
        {icon && <div className="mb-4 text-4xl">{icon}</div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-center text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link href={link} className="block h-full transition-transform hover:scale-105">
        {content}
      </Link>
    );
  }

  return content;
}
