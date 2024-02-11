const Timeline = () => {
    return (
        <div class="main-content">
            <h2 class="timeline-heading">Application Timeline</h2>
            <div class="vertical-timeline">
                <div class="timeline-item">
                    <div class="timeline-box">
                        <h3>Application Stage 1</h3>
                        <p>Description of the stage</p>
                        <p class="deadline">Deadline 1</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-box">
                        <h3>Application Stage 2</h3>
                        <p>Description of the stage</p>
                        <p class="deadline">Deadline 2</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-box">
                        <h3>Application Stage 3</h3>
                        <p>Description of the stage</p>
                        <p class="deadline">Deadline 3</p>
                    </div>
                </div>
                {/* Add more timeline items as needed  */}
            </div>
        </div>
        
    );
};
 
export default Timeline;