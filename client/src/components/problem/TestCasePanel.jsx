import { useState } from "react";

const TestCasePanel = () => {

    const [activeTab,setActiveTab]=useState(0);

    const testCases=[

        {

            input:
`nums = [2,7,11,15]
target = 9`,

            output:
`[0,1]`

        },

        {

            input:
`nums = [3,2,4]
target = 6`,

            output:
`[1,2]`

        },

        {

            input:
`nums = [3,3]
target = 6`,

            output:
`[0,1]`

        }

    ];

    return(

        <div className="bg-[#17171D] rounded-xl border border-white/10 mt-6">

            <div className="flex gap-3 border-b border-white/10 p-4">

                {

                    testCases.map((_,index)=>(

                        <button

                            key={index}

                            onClick={()=>setActiveTab(index)}

                            className={`px-4 py-2 rounded-lg transition

                            ${activeTab===index

                            ?"bg-blue-600"

                            :"bg-[#23232C]"}

                            `}

                        >

                            Case {index+1}

                        </button>

                    ))

                }

            </div>

            <div className="p-6">

                <h3 className="font-semibold mb-2">

                    Input

                </h3>

                <pre className="bg-[#0F1117] rounded-lg p-4 mb-6">

                    {testCases[activeTab].input}

                </pre>

                <h3 className="font-semibold mb-2">

                    Expected Output

                </h3>

                <pre className="bg-[#0F1117] rounded-lg p-4">

                    {testCases[activeTab].output}

                </pre>

            </div>

        </div>

    );

};

export default TestCasePanel;