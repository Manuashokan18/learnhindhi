import { AudioButton } from "@/components/common/audio-button"
import { cn } from "@/lib/utils"
import type { ConversationLine } from "@/types"

export function ConversationBubble({ speaker, hindi, transliteration, meaning }: ConversationLine) {
  const isTeacher = speaker === "teacher"

  return (
    <div className={cn("flex flex-col gap-1.5", isTeacher ? "items-start" : "items-end")}>
      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {isTeacher ? "Teacher" : "You"}
      </span>
      <div
        className={cn(
          "max-w-md rounded-2xl px-5 py-4",
          isTeacher
            ? "rounded-tl-sm bg-secondary text-secondary-foreground"
            : "rounded-tr-sm bg-primary text-primary-foreground",
        )}
      >
        <p className="font-devanagari text-xl font-medium">{hindi}</p>
        <p
          className={cn(
            "mt-1 text-sm italic",
            isTeacher ? "text-muted-foreground" : "text-primary-foreground/70",
          )}
        >
          {transliteration}
        </p>
        <p className={cn("mt-1 text-sm", isTeacher ? "text-foreground/80" : "text-primary-foreground")}>
          {meaning}
        </p>
      </div>
      {isTeacher ? <AudioButton text={hindi} className="mt-0.5" /> : null}
    </div>
  )
}
