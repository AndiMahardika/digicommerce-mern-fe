import { Link } from "react-router-dom"
import { Button } from "../../../components/ui/button"
import { LayoutDashboard } from "../../dashboard/components/layout"


export const DashboardProduct = () => {
  return (
    <LayoutDashboard>
      <main>
        <section className="flex justify-between items-end">
          <div>
            <h2>Product</h2>
            <p>Here is your product dashboard...</p>
          </div>
          <Link to="/dashboard/products/create">
            <Button>Create Product</Button>
          </Link>
        </section>
      </main>
    </LayoutDashboard>
  )
}