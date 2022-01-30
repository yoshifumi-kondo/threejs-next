import React from "react";
import DefaultPageLayout from "../../components/templates/DefaultPageLayout";
import { CustomHead } from "../../components/templates/CustomHead";
import SimpleTree from "../../components/organisms/SimpleTree";

const Test: React.FC = React.memo(() => {
    return (
        <DefaultPageLayout>
            <CustomHead />
            <SimpleTree />
        </DefaultPageLayout>
    );
});
export default Test;