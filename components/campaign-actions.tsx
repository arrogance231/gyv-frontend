"use client";

import Link from "next/link";
import { useState } from "react";

export interface CampaignActionItem {
  title: string;
  summary: string;
  href: string;
}

export interface CampaignAction {
  label: string;
  summary: string;
  items?: CampaignActionItem[];
  href: string;
  buttonText: string;
}

interface CampaignActionsProps {
  actions: CampaignAction[];
}

export default function CampaignActions({ actions }: CampaignActionsProps) {
  const [expandedAction, setExpandedAction] = useState<string | null>(null);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            aria-expanded={expandedAction === action.label}
            onClick={() => setExpandedAction((current) => (current === action.label ? null : action.label))}
            className="rounded-[1.5rem] border border-[#1D5975]/10 bg-[#F9FCFE] px-6 py-6 text-left text-sm font-semibold text-[#1D5975] shadow-sm transition hover:bg-white"
          >
            {action.label}
          </button>
        ))}
      </div>

      {actions.map((action) => {
        const isOpen = expandedAction === action.label;
        return (
          <div
            key={action.label}
            className={
              `overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "mt-6" : ""} ` +
              (isOpen
                ? "max-h-[1000px] opacity-100 rounded-[1.5rem] border border-[#CBD9E4]/50 bg-[#F7FBFF] p-6 shadow-sm"
                : "max-h-0 opacity-0")
            }
          >
            <div className={isOpen ? "space-y-4" : "space-y-0"}>
              <div className="text-sm leading-7 text-[#42516F]">
                <p>{action.summary}</p>
              </div>
              <ul className="space-y-4 rounded-2xl border border-[#D9E7F0] bg-white p-4 text-sm text-[#1D3557] shadow-sm">
                {(action.items ?? [{ title: "No items available.", summary: "There are no items defined for this section.", href: action.href }]).map((item, index) => (
                  <li key={`${item.href ?? action.label}-${index}`} className="rounded-2xl border border-[#E2EDF5] bg-[#F8FBFF] p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-[#102A43]">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-[#42516F]">{item.summary}</p>
                      </div>
                      <Link
                        href={item.href}
                        className="inline-flex items-center justify-center rounded-full bg-[#1282AA] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0d6d91]"
                      >
                        Open
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={action.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#1282AA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6d91]"
                >
                  {action.buttonText}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
