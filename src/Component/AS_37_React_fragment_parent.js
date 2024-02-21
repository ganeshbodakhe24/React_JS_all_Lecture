import AS_37_React_fragment_child from "./AS_37_React_fragment_child";

function AS_37_React_fragment_parent(){
    return(
        // <></> this is the fragment use to wrap the Element
        <>
            <h1>This is the table</h1>
            <table>
                <tbody>
                    <tr>
                        <AS_37_React_fragment_child></AS_37_React_fragment_child>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default AS_37_React_fragment_parent;