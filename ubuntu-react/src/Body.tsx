import Sidebar from './Sidebar'

function Body() {
    return (
        <div id="ubuntu-body" className="flex w-full flex-1 flex-row">
            <Sidebar />
            <div
                id="ubuntu-content"
                className="flex h-full w-full items-center justify-center"
            >
                <div className="flex h-175 w-225 border-collapse flex-row overflow-hidden rounded-2xl border-2 border-gray-300 bg-white">
                    <div className="tabs-section w-3/10 border-r-2 border-r-gray-200">
                        <span className="text-center"></span>
                    </div>
                    <div className="active-tab-section w-7/10"></div>
                </div>
            </div>
        </div>
    )
}

export default Body
