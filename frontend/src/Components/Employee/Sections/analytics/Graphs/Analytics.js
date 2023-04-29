

const Analytics = () => {

    const [data, setData] = useState([{previous:0,current:0,change:0},{previous:0,current:0,change:0},{previous:0,current:0,change:0}]);

    const choices=[{key:"Daily",value:0},{key:"Weekly",value:1},{key:"Monthly",value: 2}]

    const [selected, setSelected] = React.useState(new Set(["Daily"]));

    const [selectedChoice, setSelectedChoice] = useState("Daily");

    const getData = async () => {

        let d=""
        selected.forEach((value) =>{
            d = value
        });
        let dp = choices.filter((el) => {
            return el.key === d
        })
        dp = dp[0].value+1

        let { data } = await axios.get(`http://100.26.42.194:8080/getOverallAnalytics?type=${dp}`);

        data = JSON.parse(data)

        setData((d)=>{

            let t=[]




            for (let i = 0; i < 3; i++) {

                let p = Math.round(((data[i].current-data[i].previous)/data[i].current*100.0)||0)
                let o={current : data[i].current, previous:data[i].previous, change :p}
                t.push(o)
            }

            console.log(t);


            return t;


        });
    };

    useEffect(()=>{
        getData()
    },[])


}


export default Analytics
