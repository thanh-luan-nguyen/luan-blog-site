import SideMenu from "./SideMenu"
import TagListSection from "./TagListSection"

const Layout = ({children}) => {
  return (
	<div className="grid md:grid-cols-12">
		<SideMenu>SideMenu</SideMenu>
		<main className="md:col-span-6 bg-blue-100">{children}</main>
		<TagListSection>TagListSection</TagListSection>
	</div>
  )
}

export default Layout