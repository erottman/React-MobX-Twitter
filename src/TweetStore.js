import Firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

const tweets_subkey = 'tweets';

class TweetStore extends MobxFirebaseStore {

  constructor(config){
    const fbApp = Firebase.initializeApp(config);
    const store = new MobxFirebaseStore(Firebase.database(fbApp).ref());
  	super(store.fb);
  	this.state = {
    };
  }

  allTweetsSubs() {
  return [{
      subKey: tweets_subkey,
      asList: true
    }];
  }

  createTweet(tweet) {
  this.fb.child(tweets_subkey).push(tweet);
  }

  getTweets() {
  return this.getData(tweets_subkey);
  }

  resolveFirebaseQuery(sub) {
    return this.fb.child(tweets_subkey).orderByChild('timestamp').limitToLast(10);
  }

  render() {
    return (
        <div className="class-name">
            content
        </div>
    );
  }
}

export default TweetStore
