---
title: Reflections about misusing of cloud
date: "2023-07-13T10:00:29.448Z"
---

One of the common problems I often observe in cloud architectures is the improper utilization of certain resources. As a simple example: cloud functions being used for long-duration executions. Apart from the high-cost implications, such a solution is unlikely to function effectively, and in certain situations, it may necessitate a technology switch. I would like to share some reflections on this.

One inherent trait of human nature is to solve problems using familiar tools. It is only when a clear issue arises in the solution or when we seek advice from others that the search for a better alternative becomes apparent. The same principle applies to cloud technologies. In my opinion, the major challenge, in this case, lies in the extensive array of options available, often needing more clear use cases.

Let's take the example of creating a rate limit in Google Cloud. At first glance, it seems like the [API Gateway](https://cloud.google.com/api-gateway/docs/quotas-overview) would be the solution, as it offers a quotas policy to mitigate potential DDoS attacks. However, after some exploration, it becomes clear that this option is quite limited. In fact, a better approach would be to utilize [Cloud Armor](https://cloud.google.com/armor/docs/rate-limiting-overview). Similar scenarios can be observed in various contexts, and one common mistake I have noticed is the misuse of Pub/Sub, for instance.

> Pub/Sub enables you to create systems of event producers and consumers, called **publishers** and **subscribers**. Publishers communicate with subscribers asynchronously by broadcasting events, rather than by synchronous remote procedure calls (RPCs).”

Google Pub/Sub overview, https://cloud.google.com/pubsub/docs/overview

PubSub is Google's asynchronous messaging solution that is widely utilized within the Google ecosystem. However, one notable issue is the lack of options available for controlling the messaging process. For instance, when a message fails, there is limited control over the timing. This limitation often results in the technology being misused. Although you can attempt to reprocess a message that encountered an error, the exact consumption time remains uncertain. [This article](https://cloud.google.com/pubsub/docs/choosing-pubsub-or-cloud-tasks) gives some insights into the limitations when comparing it to Cloud Tasks, allowing a better understanding of the differences and potential constraints.

One frequent scenario is attempting to control business flows using PubSub. Let's consider an example: We have a flow that involves executing two tasks. If the first task succeeds but the second one fails, we need to retry the second task after a certain period of time. While it is possible to achieve this using PubSub, is it a good solution? I believe not.

Imagine if that period of time is relevant to the business, or varies depending on specific business rules. In such cases, using PubSub becomes less recommended due to its lack of flexibility. Instead, a better alternative would be to utilize Cloud Tasks, as it allows us to precisely set the delivery time and provides more control over scheduling and execution.

Dealing with cloud services offers an abundance of possibilities. it's important to be aware of both the limitations and features of each technology. Often, these limitations become apparent only when we start using them, which can be problematic as it may impact production usage. That's why testing in the staging environment becomes essential to identify any limitations. Without time for this kind of test? Patience. Your next solution does not need to be perfect and hardly it will be, but I hope that this reflection helps you to save some time.