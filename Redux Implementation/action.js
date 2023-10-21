export const Load_Table_Data = 'Load_Table_Data';
const loadData = 'your database api here';

export const Load_TableData = () => {
    return async dispatch => {
        try {
            const result = await fetch(`${loadData}/your_table/table_data.json`,
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                    
                }
            );

            const table_data = await result.json();
            if (table_data) {

                dispatch({
                    type: Load_Table_Data,
                    payload: table_data
                })
            }
            else {
                console.log("table data not data fetch");
            }
        }

        catch (error) {
            console.log("err in table try section");
        }
    }
}
