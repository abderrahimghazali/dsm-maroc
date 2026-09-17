"use client";

import { useId, useState, type DragEvent, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { FileText, Upload, X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import { FieldError, FieldLabel } from "./field";

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

function acceptedFormats(accept?: string) {
  if (!accept) return [];
  return accept
    .split(",")
    .map((part) => part.trim().replace(/^\./, "").toUpperCase())
    .filter(Boolean);
}

export type FileUploadProps = {
  label: ReactNode;
  accept?: string;
  maxSizeMb?: number;
  multiple?: boolean;
  error?: ReactNode;
  onFilesChange?: (files: File[]) => void;
  className?: string;
  id?: string;
};

/** Dashed dropzone with a native file input, a picked-files list, and drag-and-drop support. */
export function FileUpload({ label, accept, maxSizeMb, multiple, error, onFilesChange, className, id }: FileUploadProps) {
  const t = useT();
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const formats = acceptedFormats(accept);
  const autoHint = [
    formats.length > 0 ? `${t.acceptedFormats} : ${formats.join(", ")}` : null,
    maxSizeMb ? `${maxSizeMb} ${t.maxSizeSuffix}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  function addFiles(list: FileList | null) {
    if (!list || list.length === 0) return;
    const incoming = Array.from(list);
    const next = multiple ? [...files, ...incoming] : [incoming[0]];
    setFiles(next);
    onFilesChange?.(next);
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFilesChange?.(next);
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDragOver(false);
    addFiles(event.dataTransfer.files);
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
      <label
        htmlFor={inputId}
        onDragOver={(event) => {
          event.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={cn(
          "flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed border-line-strong bg-surface px-6 py-8 text-center transition-colors duration-(--dsm-duration-fast) ease-dsm",
          "hover:border-primary hover:bg-vert-soft/40",
          dragOver && "border-primary bg-vert-soft/40",
          error && "border-error",
        )}
      >
        <Upload aria-hidden className="size-6 text-ink-subtle" />
        <p className="text-sm text-ink">
          <span className="font-medium text-primary">{t.chooseFile}</span> {t.dropFiles}
        </p>
        {autoHint && <p className="text-xs text-ink-subtle">{autoHint}</p>}
        <input
          id={inputId}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(event) => addFiles(event.currentTarget.files)}
          aria-describedby={errorId}
          aria-invalid={!!error || undefined}
          className="dsm-sr-only"
        />
      </label>
      {files.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className="flex items-center gap-2.5 rounded-md bg-surface-muted px-3 py-2 text-sm">
              <FileText aria-hidden className="size-4 shrink-0 text-ink-subtle" />
              <span className="min-w-0 flex-1 truncate text-ink">{file.name}</span>
              <span className="shrink-0 text-xs text-ink-subtle">{formatSize(file.size)}</span>
              <button
                type="button"
                aria-label={t.remove}
                onClick={() => removeFile(index)}
                className="shrink-0 rounded-sm p-1 text-ink-subtle hover:text-error focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              >
                <X className="size-4" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && <FieldError id={errorId}>{error}</FieldError>}
    </div>
  );
}
