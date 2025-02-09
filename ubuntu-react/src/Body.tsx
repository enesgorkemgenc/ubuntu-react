import Settings from './Components/Settings/Settings';
import Sidebar from './Components/Sidebar/Sidebar';

function Body() {
    return (
        <div id="ubuntu-body" className="flex w-full flex-1 flex-row">
            <Sidebar />
            <div
                id="ubuntu-content"
                className="flex h-full w-full items-center justify-center"
            >
                <Settings />
            </div>
        </div>
    );
}

export default Body;
