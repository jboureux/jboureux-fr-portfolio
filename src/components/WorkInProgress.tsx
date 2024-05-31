import { TriangleAlertIcon } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

const WorkInProgress = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row justify-center items-center gap-5">
                    <TriangleAlertIcon />
                    <span>
                        Cette section est encore en cours de développement
                    </span>
                </CardTitle>
            </CardHeader>
        </Card>
    );
};

export default WorkInProgress;
