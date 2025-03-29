
"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ConvertPage() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setFileName(file.name);
    setLoading(true);
    setMarkdown("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Conversion failed");
      }

      const data = await response.json();
      setMarkdown(data.markdown);
    } catch (error) {
      console.error("Error converting file:", error);
      setMarkdown("Error converting file. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleCopyClick = () => {
    navigator.clipboard.writeText(markdown);
  };

  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = `${fileName.split(".")[0]}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Office to Markdown Converter</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Convert your documents, presentations, and spreadsheets to Markdown format
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Upload File</h2>
          <div
            {...getRootProps()}
            className={`flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed ${
              isDragActive ? "border-primary bg-primary/10" : "border-muted-foreground/20 hover:border-primary/50"
            } transition-colors`}
          >
            <input {...getInputProps()} />
            {loading ? (
              <div className="flex flex-col items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="mt-4 text-center text-muted-foreground">Converting {fileName}...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4 h-12 w-12 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-lg font-medium">
                  {isDragActive ? "Drop the file here" : "Drag & drop a file here, or click to select"}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Supports Word, PowerPoint, Excel, PDF, and more
                </p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-lg font-medium">Supported File Types:</h3>
            <Card>
              <CardContent className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <span className="text-sm font-medium">Word (.docx)</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <span className="text-sm font-medium">PowerPoint (.pptx)</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <span className="text-sm font-medium">Excel (.xlsx)</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <span className="text-sm font-medium">PDF (.pdf)</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <span className="text-sm font-medium">HTML (.html)</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <span className="text-sm font-medium">Text (.txt)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-2xl font-semibold">Markdown Output</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyClick}
                disabled={!markdown}
              >
                Copy
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadClick}
                disabled={!markdown}
              >
                Download
              </Button>
            </div>
          </div>
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Converted markdown will appear here..."
            className="min-h-[400px] w-full font-mono text-sm"
            readOnly={loading}
          />
        </div>
      </div>
    </div>
  );
}
