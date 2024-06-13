# Add changes
echo "Adding changes..."
git add .
if [ $? -ne 0 ]; then
  echo "Failed to add changes."
  exit 1
fi

# Commit changes
echo "Committing changes..."
git commit -am "Weekly Updates"
if [ $? -ne 0 ]; then
  echo "Failed to commit changes."
  exit 1
fi

# Pull latest changes
echo "Pulling latest changes..."
git pull
if [ $? -ne 0 ]; then
  echo "Failed to pull changes."
  exit 1
fi

# Push changes
echo "Pushing changes to the remote repository..."
git push
if [ $? -ne 0 ]; then
  echo "Failed to push changes."
  exit 1
fi

echo "Done!"