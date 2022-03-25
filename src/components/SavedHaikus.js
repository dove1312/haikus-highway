import HaikuReturn from "./HaikuReturn";

const SavedHaikus = () => {

    const [haikuList, setHaikuList] = useState([])

    // useEffect(() => {
    //     const database = getDatabase(firebase);
    //     const dbRef = ref(database);

    //     onValue(dbRef, (response) => {
    //         const newState = [];
    //         const data = response.val()
    //         for (let key in data) {
    //             newState.push({ key: key, info: data[key] })
    //         }
    //         setHaikuList(newState);
    //     })

    // }, [])

    return (
        <div className="savedHaikus">
            <header>
                <div className='wrapper'>
                    <h1>Haikus Go Here</h1>
                    <ul className="haikuList">
                        {
                            haikuList[0]
                                ? haikuList.map((haiku) => {
                                    return (
                                        <li key={ haiku.key }>
                                            <HaikuReturn haikuArray={haiku.info} />
                                        </li>
                                    )
                                })
                                : null
                        }
                    </ul>
                </div>
            </header>

        </div>

    )
}

export default SavedHaikus