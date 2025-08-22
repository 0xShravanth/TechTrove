import lodash from "lodash";

export default function capataliser(){
    const arr = ["sagar", "onSlaught", "phantom"]
    const capataliserArr = lodash.map(arr, lodash.capitalize);
    console.log(capataliserArr);

}


