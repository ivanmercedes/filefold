import { Content } from "@/types";
import DOMPurify from "dompurify";



const ContentRenderer = ({ content }: { content: Content[] }) => {
    return (
        <div>
            {content.map((item: any, index: number) => {
                switch (item.type) {
                    case "heading": {
                        const HeadingTag: string | any = `h${item.data.level}`;
                        return (
                            <HeadingTag
                                className="text-2xl font-bold pb-5"
                                key={index}
                            >
                                {item.data.content}
                            </HeadingTag>
                        );
                    }

                    case "paragraph":
                        return (
                            <p className="mb-3" key={index}>
                                {item.data.content}
                            </p>
                        );

                    case "image":
                        return (
                            <img
                                key={index}
                                src={`storage/` + item.data.url}
                                alt={item.data.alt || "image"}
                                style={{ maxWidth: "100%", height: "auto" }}
                                className="my-3"
                            />
                        );

                    case "rich-text":
                        return (
                            <div
                                className="my-3"
                                key={index}
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                        item.data.rich_text
                                    ),
                                }}
                            />
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ContentRenderer;
