"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Newsletter } from "./types";

const NewsletterPreview = dynamic(
  () => import("./NewsletterPreview").then((mod) => mod.NewsletterPreview),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[8.5/11] bg-card border border-secondary/20 rounded-md flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
      </div>
    ),
  }
);

interface NewsletterCardProps {
  newsletter: Newsletter;
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsletterCard({ newsletter }: NewsletterCardProps) {
  const pdfUrl = `/newsletters/${newsletter.filename}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden flex flex-col h-full">
        <div className="p-4">
          <NewsletterPreview pdfUrl={pdfUrl} />
        </div>

        <div className="p-4 pt-0 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-secondary mb-1">
            {newsletter.title}
          </h3>
          <p className="text-xs text-text-muted mb-2">
            {formatDate(newsletter.date)}
          </p>
          {newsletter.description && (
            <p className="text-sm text-text-muted mb-4 flex-1">
              {newsletter.description}
            </p>
          )}

          <div className="flex gap-2 mt-auto">
            <Button
              href={pdfUrl}
              variant="primary"
              external
              className="text-xs flex-1"
            >
              View Full PDF
            </Button>
            <Button href={pdfUrl} variant="outline" external className="text-xs">
              Download
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
