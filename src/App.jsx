import { useState, useEffect } from 'react'
import FormDB from "./components/FormDB"
import Header from "./components/Header"
import RecordList from "./components/RecordList"

function App() {
    const [records, setRecords] = useState([]);
    const [record, setRecord] = useState({});

    useEffect(() => {
    const getLS = () => {
        const recordsLS = JSON.parse(localStorage.getItem('records')) ?? [];
        setRecords(recordsLS)
    }
    getLS();
    }, []);


    useEffect(() => {
        localStorage.setItem('records', JSON.stringify(records));

    },[records]);

  
  const deleteRecord = (id) => {
    const recordsUpdated = records.filter(record => record.id !== id);
    setRecords(recordsUpdated);

  }

  return (
<div className="w-full mt-10">
    <Header />
    <div className="mt-12 md:flex">
        <FormDB 
            records={records}
            setRecords={setRecords}
            record={record}
            setRecord={setRecord}
        />
        <RecordList 
            records={records}
            setRecord={setRecord}
            deleteRecord={deleteRecord}
        />
    </div>
</div>


  )
}

export default App