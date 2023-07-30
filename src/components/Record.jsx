const record = ({record, setRecord, deleteRecord}) => {
  
   const handleDelete = () => {
        const answer = confirm('Are you sure you want to eliminar?');

        if (answer) {
            deleteRecord(record.id)
        }
   }

    return (
    <div className="m-3 bg-gray-300 bg-opacity-75 md:bg-opacity-50 shadow-md px-5 py-10 rounded-x l">
        <p className="text-gray-700 uppercase font-bold">systolic: {''}  <span className="font-normal normal-case">{record.systolic}</span>
        </p>
        <p className="text-gray-700 uppercase font-bold">diastolic: {''}  <span className="font-normal normal-case">{record.diastolic}</span>
        </p>
        <p className="text-gray-700 uppercase font-bold">weight: {''}  <span className="font-normal normal-case">{record.weight}</span>
        </p>                
        <p className="text-gray-700 uppercase font-bold">date alta: {''}  <span className="font-normal normal-case">{record.date}</span>
        </p>
        
        <div className="flex justify-between mt-4">
            <button 
                type="button"
                className="bg-indigo-600 py-2 px-10 rounded hover:bg-indigo-300 text-white font-bold uppercase"
                onClick={() => setRecord(record)}
            >Edit</button>
            <button 
                type="button"
                className="bg-red-600 py-2 px-10 rounded hover:bg-red-300 text-white font-bold uppercase"
                onClick={handleDelete}
            >Delete</button>
        </div>
    </div>
  )
}

export default record