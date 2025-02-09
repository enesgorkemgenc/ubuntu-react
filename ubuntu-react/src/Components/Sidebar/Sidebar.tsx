function Sidebar() {
    return (
        <div
            id="ubuntu-sidebar"
            className="flex h-full w-18 flex-col items-center justify-start bg-black/50 px-1"
        >
            <div className="flex aspect-square w-full flex-col items-center justify-center rounded-2xl text-white transition-colors duration-150 hover:bg-white/10">
                S
            </div>
            <div className="flex w-full flex-col"></div>
        </div>
    );
}

export default Sidebar;
