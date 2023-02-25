import cv2

# Load the full body cascade classifier
cascade_classifier = cv2.CascadeClassifier('./haarcascade_fullbody.xml')

# Initialize a counter for the number of detected humans
human_count = 0

# Load the input video
cap = cv2.VideoCapture('./video4.mov')

while True:
    # Read the current frame
    ret, frame = cap.read()
    
    # If there are no more frames to read, break out of the loop
    if not ret:
        break
    
    # Convert the frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Detect humans in the grayscale image
    humans = cascade_classifier.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30), flags=cv2.CASCADE_SCALE_IMAGE)
    
    # Draw rectangles around the detected humans and update the counter
    for (x, y, w, h) in humans:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        human_count += 1
        human_count %= 4
    
    # Add the human count as a text overlay on the frame
    cv2.putText(frame, f"Human Count: {human_count}", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    
    # Display the resulting frame
    cv2.imshow('Human Detector', frame)
    
    # Exit the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close the window
cap.release()
cv2.destroyAllWindows()
