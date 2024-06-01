import { LanguageCardItem } from "@/schemas/language-card-item";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface LanguageCardProps {
    item: LanguageCardItem;
}

const LanguageCard = (props: LanguageCardProps) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{props.item.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row flex-wrap gap-5">
                    {props.item.children.map((language, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-row gap-2 items-center"
                            >
                                <img src={language.icon} className="w-8 h-8" />
                                <p>{language.label}</p>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};

export default LanguageCard;
