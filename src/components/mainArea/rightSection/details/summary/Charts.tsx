import SemiCircularChart from '../../../../../ui/chart/SemicircularChart'
import SummaryLayout from '../../../../../ui/summaryLayout/SummaryLayout'

function Charts() {
    return (
        <SummaryLayout title={"Cost"} tag="USD">
            <div className="flex gap-4 w-full justify-evenly">
                <SemiCircularChart amount={{
                    color: "#065f64",
                    value: 3525236,
                }}
                    outstanding={{
                        color: "#00c0f1",
                        value: 4000,
                    }}
                    title="Goods/service Balance"
                />
                <SemiCircularChart amount={{
                    color: "#028a25",
                    value: 596000,
                }}
                    outstanding={{
                        color: "#68da6a",
                        value: 5000,
                    }}
                    title="Freight/Delhivery Balance"
                />
            </div>
        </SummaryLayout>
    )
}

export default Charts