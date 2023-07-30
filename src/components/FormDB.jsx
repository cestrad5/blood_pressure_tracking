import { useState, useEffect } from 'react';
import Error from './Error'

const FormDB = ({ records, setRecords, record, setRecord}) => {
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('');
 
    const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(record).length > 0) {
      setSystolic(record.systolic);
      setDiastolic(record.diastolic);
      setWeight(record.weight);
      setDate(record.date);
    } else {
      // Get the current date in the format "AAAA-MM-DD"
      const currentDate = new Date().toISOString().split('T')[0];
      setDate(currentDate);
    }
  }, [record]);

    const idGenerator = () => {
        return Math.random().toString(36).slice(2) + Date.now().toString(36)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validating FormDB
        if( [ systolic, diastolic, weight, date ].includes('') ) {
            setError(true)
            return;
        } 
        setError(false)

        // Object record
        const objectRecord = {
            systolic, 
            diastolic, 
            weight, 
            date, 
        }

    if (record.id) {
        //Editing record
        objectRecord.id = record.id

        const recordsUpdated = records.map(recordstate => recordstate.id === record.id ? objectRecord : recordstate)

        setRecords(recordsUpdated)
        setRecord({})
    } else {
        objectRecord.id = idGenerator();
        setRecords([...records, objectRecord]);        
    }
    
        // Reset the form
        setSystolic('')
        setDiastolic('')
        setWeight('')
        setDate('')

    }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className="font-black text-3xl text-center">Track your data</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Add a register and {''}
            <span className="text-red-600 font-bold ">Manage it</span>
        </p>
        
        <form
            onSubmit={handleSubmit}
            className="bg-gray-300 bg-opacity-75 md:bg-opacity-50 shadow-md rounded-lg py-10 px-5 mb-10"
        >

        { error &&  <Error><p>All fields are required</p></Error>}
        <div className="mb-5"></div>

            <div className="mb-5">
                <label htmlFor="systolic" className="block text-gray-700 uppercase font-bold">
                    Systolic Pressure
                </label>
                <input
                    id="systolic"
                    type="text"
                    placeholder="Enter your Systolic Pressure"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={systolic}
                    onChange={ (e) => setSystolic(e.target.value) }
                />  
            </div>
                <div className="mb-5">
                    <label htmlFor="diastolic" className="block text-gray-700 uppercase font-bold">
                        Diastolic Pressure
                    </label>
                    <input
                        id="diastolic"
                        type="text"
                        placeholder="Enter your Diastolic Pressure"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={diastolic}
                        onChange={ (e) => setDiastolic(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="weight" className="block text-gray-700 uppercase font-bold">
                        Weight
                    </label>
                    <input
                        id="weight"
                        type="integer"
                        placeholder="Enter your Weight"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={weight}
                        onChange={ (e) => setWeight(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
                        Date of measurement
                    </label>
                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={ (e) => setDate(e.target.value) }
                    />  
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={ record.id ? "Edit record" : "Add record" }
                />  
        </form>

    </div>
  )
  }

export default FormDB