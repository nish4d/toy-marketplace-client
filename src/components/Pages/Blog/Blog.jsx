import { Helmet } from "react-helmet";
import bg from "../../../assets/bg.png";

const Blog = () => {
  return (
    <>
        <Helmet>
        <title>AT | BLOG</title>
    </Helmet>
        <div className="py-12 flex justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-2/4">
        <div>
          <h2 className="font-semibold mt-6 text-xl">
            What is an access token and refresh token? 
          </h2>
          <p>
            A refresh token just helps you re-validate a user without them
            having to re-enter their login credentials multiple times. The
            access token is re-issued, provided the refresh token is a valid one
            requesting permission to access confidential resources.
           
            <h2 className="font-semibold mt-6 text-xl">How do they work and
            where should we store them on the client-side?</h2>
            To store access tokens and refresh tokens on the client-side, you
            have a few options:
            <br />
            <p className="mt-4"><span className="font-semibold mt-4">Local Storage:</span> You can store the tokens in the browser's local
            storage, which provides a simple key-value storage mechanism. Local
            storage allows you to persist the tokens across page refreshes or
            browser restarts. However, storing sensitive tokens in local storage
            can be vulnerable to cross-site scripting (XSS) attacks if your
            application is susceptible to such threats.</p>
           
            <p className="mt-4"><span className="font-semibold">Cookies:</span> You can store the tokens in HTTP-only secure cookies. By
            setting the "HttpOnly" flag, you can prevent JavaScript from
            accessing the cookie contents, making it more secure against XSS
            attacks. Cookies can be set to expire after a certain time,
            providing control over token validity. However, cookies are
            susceptible to cross-site request forgery (CSRF) attacks if not
            implemented properly.</p>
          </p>
        </div>
        <div>
          <h2 className="font-semibold mt-6 text-xl">Compare SQL and NoSQL databases?</h2>
          <p>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mt-6 text-xl">What is express js? What is Nest JS?</h2>
          <p>
            Express is a minimalist and flexible framework that is easy to use
            and has a large community of developers. NestJS, on the other hand,
            is a newer framework that provides additional features such as
            dependency injection, a modular architecture, and an intuitive CLI.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mt-6 text-xl">What is MongoDB aggregate and how does it work ?</h2>
          <p>
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
