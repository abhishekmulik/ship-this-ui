
import { classNames } from "../../utils/common";
import {
  AlignJustify,
  Droplet,
  Package,
  PencilRuler,
  PlusIcon,
  Settings,
  TriangleAlert,
  UserRound,
} from "lucide-react";
import { IMainLayout } from "./mainLayout.types";

const navigation = [
  { name: "package", icon: Package, current: true },
  { name: "alert", icon: TriangleAlert, current: false },
  { name: "UserRound", icon: UserRound, current: false },
  { name: "Droplet", icon: Droplet, current: false },
  { name: "settings", icon: Settings, current: false },
  { name: "fix", icon: PencilRuler, current: false },
];


export default function MainLayout({
  firstColumn,
  secondColumn,
  header,
}: IMainLayout) {
  return (
    <>
      <div className="bg-white-100">
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto w-[72px] lg:bg-green-100 lg:pb-4">
          <div className="flex flex-col pt-4 shrink-0 items-center justify-center gap-5">
            <span>
              <AlignJustify className="w-5 stroke-white-100" />
            </span>
            <span className="inline-block p-4 rounded-2xl bg-green-400">
              <PlusIcon className="w-6 stroke-green-200" />
            </span>
          </div>
          <nav className="mt-8">
            <ul role="list" className="flex flex-col items-center space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className={classNames(
                      item.current ? "bg-green-300" : "hover:bg-green-300",
                      "group flex gap-x-3 rounded-2xl px-4 py-1 mb-2 text-sm font-semibold leading-6"
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className="w-4 shrink-0 stroke-green-200"
                    />
                    <span className="sr-only">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <aside className="fixed bottom-0 w-[480px] left-20 top-16 z-10 border-r border-gray-200 px-4 py-6 block no-scrollbar">
          {firstColumn}
        </aside>
        <div className="lg:pl-20">
          <div className="px-4 py-2">{header}</div>
          <div
            aria-hidden="true"
            className="lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
          />
          <main className="pl-[29rem] fixed w-[95%]">
            <div className="px-4 py-0">{secondColumn}</div>
          </main>
        </div>
      </div>
    </>
  );
}
