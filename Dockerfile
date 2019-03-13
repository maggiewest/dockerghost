FROM ghostinspector/test-runner-node
USER root
# Copy your node app
COPY . .

# Install your app
RUN npm install .

ENV APP_PORT 8000
ENV GI_API_KEY 19eb63f6d94736cf545d2a575015825c926f3952
ENV GI_SUITE 5c76e1e497e7017f0910544c
#ENV GI_PARAM_myVar some-custom-value
ENV NGROK_TOKEN 3vBUfC3dwj9TVALGbmj2G_5yrNEmHxvbmnFvMQag6R3

# Pass your application entrypoint into our test runner script
CMD ["index.js"]
