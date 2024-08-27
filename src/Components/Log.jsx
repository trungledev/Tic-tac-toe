export default function Log({logs}){
    
    return (<div id="log">
        <ol>
            {logs.map((log, index)=>(
                <li key={index}>{log}</li>
            ))}
        </ol>
    </div>);
}