import React, { useEffect, useRef, useState } from 'react';
import Network from './Tabs/Network';

const LOCAL_STORAGE_LAST_SELECTED_TAB_KEY = 'settings-last-selected-tab';

const Settings: React.FC = () => {
    const tabsConfiguration = [
        [
            { key: 'network', tabLabel: 'Network', icon: 'Z' },
            { key: 'bluetooth', tabLabel: 'Bluetooth', icon: 'B' }
        ],
        [
            { key: 'displays', tabLabel: 'Displays', icon: 'D' },
            { key: 'sound', tabLabel: 'Sound', icon: 'S' },
            { key: 'power', tabLabel: 'Power', icon: 'P' },
            { key: 'multitasking', tabLabel: 'Multitasking', icon: 'M' },
            { key: 'appearance', tabLabel: 'Appearance', icon: 'A' },
            { key: 'ubuntu-desktop', tabLabel: 'Ubuntu Desktop', icon: 'U' }
        ],
        [
            { key: 'apps', tabLabel: 'Apps', icon: 'A' },
            { key: 'notifications', tabLabel: 'Notifications', icon: 'N' },
            { key: 'search', tabLabel: 'Search', icon: 'S' },
            { key: 'online-accounts', tabLabel: 'Online Accounts', icon: 'O' },
            { key: 'sharing', tabLabel: 'Sharing', icon: 'S' }
        ],
        [
            { key: 'mouse-touchpad', tabLabel: 'Mouse & Touchpad', icon: 'M' },
            { key: 'keyboard', tabLabel: 'Keyboard', icon: 'K' },
            { key: 'color', tabLabel: 'Color', icon: 'C' },
            { key: 'printers', tabLabel: 'Printers', icon: 'P' }
        ],
        [
            { key: 'accessibility', tabLabel: 'Accessibility', icon: 'A' },
            {
                key: 'privacy-security',
                tabLabel: 'Privacy & Security',
                icon: 'P'
            },
            { key: 'system', tabLabel: 'System', icon: 'S' }
        ]
    ];
    const defaultActiveTab =
        localStorage.getItem(LOCAL_STORAGE_LAST_SELECTED_TAB_KEY) ?? 'network';

    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const settingsRef = useRef(null);

    function handleTabSelection(selectedTab: string) {
        localStorage.setItem(LOCAL_STORAGE_LAST_SELECTED_TAB_KEY, selectedTab);
        setActiveTab(selectedTab);
    }
    function getTabContent(tab: string) {
        switch (tab) {
            case 'network':
                return <Network />;
        }
    }

    useEffect(() => {
        settingsRef.current?.addEventListener('dragstart', function (event) {
            console.log('here');

            event.dataTransfer.setData('text', event.target.id);
        });
    }, []);

    return (
        <div
            ref={settingsRef}
            className="flex h-150 w-240 border-collapse flex-row overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-lg"
        >
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
                    {tabsConfiguration.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            <div className="flex w-full flex-col gap-1 py-2.5">
                                {group.map(({ key, tabLabel, icon }) => (
                                    <div
                                        key={key}
                                        onClick={() => handleTabSelection(key)}
                                        className={`flex h-10 w-full flex-row items-center justify-start gap-3.5 rounded-md px-4 transition-colors duration-75 ${
                                            activeTab === key
                                                ? 'bg-black/10'
                                                : 'hover:bg-black/5 active:bg-black/15'
                                        }`}
                                    >
                                        <span>{icon}</span>
                                        <span>{tabLabel}</span>
                                    </div>
                                ))}
                            </div>
                            {groupIndex < tabsConfiguration.length - 1 && (
                                <hr className="border-gray-300/80" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-1 flex-col bg-zinc-100">
                <div className="flex h-10 flex-row items-center justify-between">
                    <div></div>
                    <span className="inline-block text-sm font-medium">
                        {activeTab}
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
                <div className="flex w-full flex-1 flex-col overflow-auto">
                    <div className="mx-auto flex w-140 flex-1 flex-col pt-5">
                        {getTabContent(activeTab)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
