const StoryList = ({stories}) => {
  let comments="";
  
  return (
    <div>
      {stories.map(story => (
        story.title || story.story_title?
        <div className="story-preview" key={story.created_at_i} >
        {story.title?
          <h3 className="title" >{ story.title }</h3>
          :<h3 className="title" >{ story.story_title }</h3>}
          <p className="author"> {story.points} points by { story.author } { story.created_at }| {story.num_comments} comments</p>
          <p></p>
        </div>: null
      ))}
    </div>
  );
}

export default StoryList;
