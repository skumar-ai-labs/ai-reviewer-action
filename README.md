# AI Reviewer (Java Core + Thin GitHub Action)

brew install gradle (if no gradle)

gradle wrapper (only first time)

# Run Java service
cd core-java
./gradlew bootRun

# Test Action (in another terminal)
cd ../action-ts
npm install
CORE_URL=http://localhost:8080 npm run build && node dist/index.js
