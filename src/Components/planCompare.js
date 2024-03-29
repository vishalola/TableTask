import BoolTableItem from "./boolTableItem";
import TableItem from "./tableItem";

export default function PlanCompare() {
  return (
    <div className="mx-auto w-full max-w-screen-xl lg:px-20 my-16 px-0">
      <div class="mx-auto mb-12 text-center sm:max-w-lg">
        <h2 class="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
          Compare plans and features
        </h2>
        <p class="mt-5 text-gray-600 sm:text-lg">
          Choose the plan that's right for your business.
          <br />
          With <b>Elephant.ai</b>, you can start for free and upgrade as you grow.
        </p>
      </div>
      <div className="overflow-x-scroll md:overflow-x-visible">
        <table className="w-full table-fixed border-gray-200 border">
          <thead>
            <tr class="divide-x divide-gray-200 border border-gray-200">
              <th class="sticky left-0 z-20 w-40 bg-gray-50 p-6 md:top-0 md:w-1/4"></th>
              <th class="sticky z-10 w-40 bg-gray-50 p-6 md:top-0 md:w-auto">
                <div class="mb-4 flex items-center space-x-2">
                  <div class="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-black"></div>
                  <h3 class="font-display text-xl font-bold text-black md:text-2xl">
                    Free
                  </h3>
                </div>
                <a
                  class="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-black border-black hover:text-black"
                  href="https://app.dub.co/register"
                >
                  Start for free
                </a>
              </th>
              <th class="sticky z-10 w-40 bg-gray-50 p-6 md:top-0 md:w-auto">
                <div class="mb-4 flex items-center space-x-2">
                  <div class="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-blue-500"></div>
                  <h3 class="font-display text-xl font-bold text-black md:text-2xl">
                    Hobby
                  </h3>
                </div>
                <a
                  class="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-blue-500 border-blue-500 hover:text-blue-500"
                  href="https://app.dub.co/register"
                >
                  Get started
                </a>
              </th>
              <th class="sticky z-10 w-40 bg-gray-50 p-6 md:top-0 md:w-auto">
                <div class="mb-4 flex items-center space-x-2">
                  <div class="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-sky-900"></div>
                  <h3 class="font-display text-xl font-bold text-black md:text-2xl">
                    Standard
                  </h3>
                </div>
                <a
                  class="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-sky-900 border-sky-900 hover:text-sky-900"
                  href="https://app.dub.co/register"
                >
                  Get started
                </a>
              </th>
              <th class="sticky z-10 w-40 bg-gray-50 p-6 md:top-0 md:w-auto">
                <div class="mb-4 flex items-center space-x-2">
                  <div class="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-violet-600"></div>
                  <h3 class="font-display text-xl font-bold text-black md:text-2xl">
                    Unlimited
                  </h3>
                </div>
                <a
                  class="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-violet-600 border-violet-600 hover:text-violet-600"
                  href="/enterprise"
                >
                  Contact us
                </a>
              </th>
            </tr>
          </thead>

        <TableItem name="descriptive feature" first="first desc" second="second desc" third="third desc" fourth="fourth desc"/>
        <BoolTableItem name="boolean type feature" second third fourth/>
        </table>
      </div>
    </div>
  );
}
