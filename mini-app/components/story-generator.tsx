"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StoryGenerator() {
  const [theme, setTheme] = useState("");
  const [story, setStory] = useState("");

  const generateStory = () => {
    if (!theme.trim()) return;
    setStory(`Once upon a time, in a land of ${theme}, there lived a curious soul who...`);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Story Generator</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input
          placeholder="Enter a theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
        <Button onClick={generateStory}>Generate Story</Button>
        {story && (
          <div className="mt-4 p-4 bg-muted rounded">
            <p>{story}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
