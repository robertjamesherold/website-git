import data from "./data/storyData"
import {ServiceList} from "./components/ServiceList";

const dataServiceList = data.map((item) => ({
    icon: item.icon,
    title: item.title,
    text: item.text,
}));

export function ServiceListStoryPage() {
    return (
        <ServiceList
            data={dataServiceList}
            title='Was mich antreibt?'
        />
    );
}
