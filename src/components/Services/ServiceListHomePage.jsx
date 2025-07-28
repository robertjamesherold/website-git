import data from "./data/serviceHomeData"
import {ServiceList} from "./components/ServiceList";

const dataServiceList = data.map((item) => ({
    icon: item.icon,
    title: item.title,
    text: item.text,
}));

export function ServiceListHomePage() {
    return (
        <ServiceList
            data={dataServiceList}
            title='Was ich gestalte?'
        />
    );
}
