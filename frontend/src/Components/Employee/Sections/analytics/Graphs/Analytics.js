

const Analytics = () => {

    const [data, setData] = useState([{previous:0,current:0,change:0},{previous:0,current:0,change:0},{previous:0,current:0,change:0}]);

    const choices=[{key:"Daily",value:0},{key:"Weekly",value:1},{key:"Monthly",value: 2}]

    const [selected, setSelected] = React.useState(new Set(["Daily"]));

    const [selectedChoice, setSelectedChoice] = useState("Daily");


}


export default Analytics
