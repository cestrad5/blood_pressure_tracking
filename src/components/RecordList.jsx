import Record from "./Record"

const RecordList = ({records, setRecord, deleteRecord}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
       
       
        {records && records.length ? ( 
            <>
                <h2 className="font-black text-3xl text-center">List of results</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Manage your {''}
                    <span className="text-red-600 font-bold ">Records</span>
                </p>
                {records.map(record =>(
                    <Record
                        key = {record.id}    
                        record= {record}
                        setRecord = {setRecord}
                        deleteRecord={deleteRecord}
                    />
                ))}            
            </>
        
        
        ) : (
            <>
                <h2 className="font-black text-3xl text-center">You have not added any data yet</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Start adding {''}
                    <span className="text-indigo-600 font-bold ">and it will appear here</span>
                </p>            
            </>
        ) }
    </div>

  )
}

export default RecordList
