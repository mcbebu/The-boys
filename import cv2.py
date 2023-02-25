import cv2

# Load the fullbody cascade classifier
fullbody_cascade = cv2.CascadeClassifier('haarcascade_fullbody.xml')

# Load the video file
cap = cv2.VideoCapture('video.mov')

while True:
    # Read the current frame
    ret, frame = cap.read()

    # If there is no frame, break the loop
    if not ret:
        break

    # Convert the frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect fullbody in the grayscale image
    fullbody = fullbody_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

    # Draw rectangles around the detected fullbody
    for (x, y, w, h) in fullbody:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    # Display the resulting frame
    cv2.imshow('Fullbody Detector', frame)

    # Exit the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close the window
cap.release()
cv2.destroyAllWindows()
