
import useApi from "../../hooks/useApi";
import Breadcrumb from "../../components/breadcrumb";
import SideBarSearch from '../../components/side-bar-search'
import {useParams} from 'react-router-dom'
import ProductList from './components/product-list'
import { useEffect,useState} from 'react' 


function Category(props) {
  const params = useParams();
  const api = useApi();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const urlQueryData = {};
    urlQueryData["productTaxons.taxon.code"] = params.taxon_code;
    urlQueryData["order[code]"] = "asc";
    urlQueryData["order[createdAt]"] = "asc";

    console.log(">> URL QUERY DATA", urlQueryData);

    api
      .get("shop/products", { params: urlQueryData })
      .then((response) => {
        console.log(">> PRODUCT RESP", response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(">> ERR", err);
      });
  }, []);

  const breadcumbs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Category",
      href: "/category",
    },
    {
      title: params.taxon_code,
      href: "/category/" + params.taxon_code,
    },
  ];

  return (
    <>
      <Breadcrumb items={breadcumbs} />

      <div className="content">
        <div className="container">
          <div className="row">
            <SideBarSearch />

            <ProductList products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
