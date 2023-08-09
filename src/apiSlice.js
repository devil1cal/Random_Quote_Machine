import axios from "axios";
import React from "react";
import "./connection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const baseURL = "https://api.quotable.io/random";

export default function QuoteContent() {
  const [quote, setQuotes] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setQuotes(response.data);
    });
  }, []);

  function createPost() {
    axios.get(`${baseURL}`).then((response) => {
      setQuotes(response.data);
    });
  }
  /* function handleClick(event) {
    createPost();
    window.location.reload();
  }*/
  function refreshPage() {
    window.location.reload(true);
  }

  if (!quote) return "No post!";

  return (
    <div className="main-box">
      <div id="quote-box" className="glassbox">
        <div className="quote-text-box">
          <p id="text" className="quote-text">
            {quote.content}
          </p>
          <p id="author" className="quote-author">
            {quote.author}
          </p>
        </div>
        <div className="share-change">
          <a
            id="tweet-quote"
            className="quote-tweet"
            href="twitter.com/intent/tweet"
            target="_blank"
          >
            <FontAwesomeIcon className="tweet-birb" icon={["fab", "twitter"]} />
          </a>

          <button
            id="new-quote"
            className="glass-button "
            type="button"
            onClick={(createPost, refreshPage)}
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}
/*   <input
            type="button"
            value="Reload page"
            onClick="location.reload();"
          />*/
