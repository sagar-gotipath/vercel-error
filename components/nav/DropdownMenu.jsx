import { useState } from "react";
import TransitionCollapse from "../TransitionCollapse";
import MobileDropdown from "./MobileDropdown";
import MobileDropdownItem from "./MobileDropdownItem";

export default function DropdownMenu({ title = "", items = [], icon }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="lg:relative">
                <span
                    className="flex items-center justify-between px-4 py-2 transition duration-150 cursor-pointer lg:inline-flex lg:h-12 gap-x-1 lg:px-0 lg:py-0 hover:opacity-80"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>{title}</span>
                </span>
                <TransitionCollapse>
                    {isOpen && items.length > 0 && (
                        <div className="absolute inset-x-0 py-2 border-t border-woodsmoke-500 bg-woodsmoke-500 lg:w-60 lg:left-auto lg:right-0 top-full">
                            <div>
                                {items.map((item, index) => {
                                    {
                                        if (
                                            item.hasOwnProperty("items") &&
                                            item.items.length > 0
                                        ) {
                                            return (
                                                <MobileDropdown
                                                    title={item.title}
                                                    items={item.items}
                                                    key={index}
                                                />
                                            );
                                        } else {
                                            return (
                                                <MobileDropdownItem
                                                    title={item.title}
                                                    href={item.href}
                                                    key={index}
                                                />
                                            );
                                        }
                                    }
                                })}
                            </div>
                        </div>
                    )}
                </TransitionCollapse>
            </div>
        </>
    );
}
