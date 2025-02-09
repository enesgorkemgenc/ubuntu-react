import WindowsButton from './Components/WindowsButton';

function TopBar() {
    return (
        <div
            id="ubuntu-top-bar"
            className="flex h-10 w-full items-center justify-between px-6"
        >
            <WindowsButton />
            <div className="font-normal text-gray-300">May 1 12:34</div>
            <div className="font-normal text-gray-300">a b c</div>
        </div>
    );
}

export default TopBar;
