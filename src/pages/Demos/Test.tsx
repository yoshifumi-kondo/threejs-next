import React, { FC } from "react";
import DefaultPageLayout from "../../components/templates/DefaultPageLayout";
import { CustomHead } from "../../components/templates/CustomHead";
import SimpleTree from "../../components/molecules/SimpleTree";

const Test: FC = React.memo(() => {
    return (
        <DefaultPageLayout>
            <CustomHead />
            <SimpleTree />
        </DefaultPageLayout>
    );
});
export default Test;