import Sidebar from './Components/Sidebar/Sidebar';

function Body() {
    return (
        <div id="ubuntu-body" className="flex w-full flex-1 flex-row">
            <Sidebar />
            <div
                id="ubuntu-content"
                className="flex h-full w-full items-center justify-center"
            >
                <div className="flex h-150 w-240 border-collapse flex-row overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-lg">
                    <div className="tabs-section gap flex w-1/4 flex-col border-r-2 border-r-gray-200">
                        <div className="flex flex-col pt-2">
                            <div className="flex flex-row justify-between px-5">
                                <span>o</span>
                                <span className="inline-block text-sm font-medium">
                                    Settings
                                </span>
                                <span>---</span>
                            </div>
                            <div className="hidden"></div>
                        </div>
                        <div className="flex w-full flex-1 flex-col overflow-y-auto px-1 text-sm font-light hover:cursor-default [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-100">
                            <div className="flex w-full flex-col gap-1 py-2.5">
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>Z</span>
                                    <span>Network</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>B</span>
                                    <span>Bluetooth</span>
                                </div>
                            </div>
                            <hr className="border-gray-300/80" />
                            <div className="flex w-full flex-col gap-1 py-2.5">
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>D</span>
                                    <span>Displays</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>S</span>
                                    <span>Sound</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>P</span>
                                    <span>Power</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>M</span>
                                    <span>Multitasking</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>A</span>
                                    <span>Appearance</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>U</span>
                                    <span>Ubuntu Desktop</span>
                                </div>
                            </div>
                            <hr className="border-gray-300/80" />
                            <div className="flex w-full flex-col gap-1 py-2.5">
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>A</span>
                                    <span>Apps</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>N</span>
                                    <span>Notifications</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>S</span>
                                    <span>Search</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>O</span>
                                    <span>Online Accounts</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>S</span>
                                    <span>Sharing</span>
                                </div>
                            </div>
                            <hr className="border-gray-300/80" />
                            <div className="flex w-full flex-col gap-1 py-2.5">
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>M</span>
                                    <span>Mouse & Touchpad</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>K</span>
                                    <span>Keyboard</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>C</span>
                                    <span>Color</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>P</span>
                                    <span>Printers</span>
                                </div>
                            </div>
                            <hr className="border-gray-300/80" />
                            <div className="flex w-full flex-col gap-1 py-2.5">
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>A</span>
                                    <span>Accessibility</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>P</span>
                                    <span>Privacy & Security</span>
                                </div>
                                <div className="flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 hover:bg-black/5 active:bg-black/15">
                                    <span>S</span>
                                    <span>System</span>
                                </div>
                            </div>
                            <hr className="border-gray-300/80" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex h-10 flex-row items-center justify-between">
                            <div></div>
                            <span className="inline-block text-sm font-medium">
                                Network
                            </span>
                            <div className="flex h-full flex-row items-center justify-between gap-5 px-2">
                                <span className="h-5.5 w-5.5 rounded-full bg-black/10 text-center text-sm transition-colors duration-300 hover:cursor-default hover:bg-black/15 active:bg-black/25">
                                    _
                                </span>
                                <span className="h-5.5 w-5.5 rounded-full bg-black/10 text-center text-sm transition-colors duration-300 hover:cursor-default hover:bg-black/15 active:bg-black/25">
                                    □
                                </span>
                                <span className="h-5.5 w-5.5 rounded-full bg-black/10 text-center text-sm transition-colors duration-300 hover:cursor-default hover:bg-black/15 active:bg-black/25">
                                    x
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
